'use strict';
const redis = require('redis');
const nanoid = require('nanoid');
var CryptoJS = require("crypto-js");
var myPassword = "akhilpassword";
const sjcl = require('sjcl');
// var ciphertext = CryptoJS.AES.encrypt('akhil', myPassword);
// var decrypted  = CryptoJS.AES.decrypt(ciphertext.toString(), myPassword);
// var plaintext = decrypted.toString(CryptoJS.enc.Utf8);
// console.log(ciphertext.toString());


// var btoa = require('btoa');

var client;

const REDISENDPOINT = "redis-research-m.hrtmxi.ng.0001.aps1.cache.amazonaws.com";

function connectHandler(e) {
    console.log("Redis connected: " + e);
}

function closeHandler(e) {
    console.log("Redis connection closed: " + e);
}

function errorHandler(e) {
    console.log("Redis connection failed: " + e);
}

const generatePolicy = function (principalId, effect, resource) {
    const authResponse = {};
    authResponse.principalId = principalId;
    authResponse.usageIdentifierKey = 'avhY6m4EbA41Ur2AWbwjn5NnEDKGeYnp4C3vjXDR';
    if (effect && resource) {
        const policyDocument = {};
        policyDocument.Version = '2012-10-17';
        policyDocument.Statement = [];
        const statementOne = {};
        statementOne.Action = 'execute-api:Invoke';
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }
    return authResponse;
};

exports.auth = async (event) => {
    try {
        // console.log("=================");
        // console.log("Token: ", event.queryStringParameters.token);
        // console.log("=================");

        if (!client) {
            client = redis.createClient({
                host: REDISENDPOINT,
                port: 6379
            });
        }

        client.off("error", errorHandler);

        client.off("end", closeHandler);

        client.off("connect", connectHandler);

        client.on("error", errorHandler);

        client.on("end", closeHandler);

        client.on('connect', function (result) { console.log("connected to redis server"); })

        // client.on("connect", connectHandler);


        const srem = (p1, ...args) => (new Promise((resolve, reject) => {
            client.srem(p1, ...args, (err, result) => { if (err) { return reject(err) } resolve(result); })
        }));

        const sismember = (p1, p2) => (new Promise((resolve, reject) => {
            client.sismember(p1, p2, (err, result) => { if (err) { return reject(err) } resolve(result); })
        }));

        const token = event.queryStringParameters.token ? event.queryStringParameters.token.trim() : undefined;
        const userId = event.queryStringParameters.uid ? event.queryStringParameters.uid.trim() : undefined;

        if (!token || !userId) { return 'Unauthorized'; }

        const decodedToken = Buffer.from(token, 'hex').toString('utf8');
        const encToken = decodedToken.slice(0, -7);
        const tokenKey = decodedToken.slice(-7);
        const origToken = sjcl.decrypt(tokenKey, encToken);

        console.log(encToken, tokenKey, origToken);

        const key = `user_${userId}`;
        // console.log("key= ",key,"token = ",token)
        const tokenExists = await sismember(key, origToken);
        // console.log(tokenExists,"tokenExists")
        // In this example, the token is treated as the status for simplicity.
        switch (tokenExists) {
            case 1:
                 srem(key, origToken).catch(e => console.log(e))
                return generatePolicy('user', 'Allow', event.methodArn);
            case 0:
                return generatePolicy('user', 'Deny', event.methodArn);
            default:
                return 'Unauthorized';
        }
    } catch (e) {
        console.log(e)
    }
};

exports.gettoken = async (event) => {
    console.log("called get tiken")
    const DEFAULTCOUNT = 20;
    try {
        var encoded_tokens = ''
        var tokens = [];
        // var count = parseInt(event.queryStringParameters.count);
        // count = isNaN(count) ? DEFAULTCOUNT : count;
        var count = DEFAULTCOUNT
        const userId = event.queryStringParameters.uid ? event.queryStringParameters.uid.trim() : undefined;
        const SECONDSPERTOKEN = 180;
        if (!userId) { throw new Error("Missing parameters") }

        for (let i = 0; i < count; i++) {
            // tokens.push(nanoid());
        //    let add_j =  nanoid().replace(/a/g,'j');//convert all a to j
        //    let remove_j =  add_j.replace(/j/g,'a');//convert all j to a
        //    tokens.push(remove_j); 
        //     encoded_tokens = encoded_tokens + add_j + '/';
        let id  =  nanoid()
        var ciphertext = CryptoJS.AES.encrypt(id, myPassword);
        let encoded = ciphertext.toString()
        tokens.push(id); 

        encoded_tokens = encoded_tokens + encoded+")";
        
        console.log("encoded tokens=",encoded_tokens)

        }
        if (!client) {
            client = redis.createClient({
                host: "redis-research.ztt9xp.ng.0001.use1.cache.amazonaws.com",
                port: 6379
            });
        }

        client.off("error", errorHandler);

        client.off("end", closeHandler);

        client.off("connect", connectHandler);

        client.on("error", errorHandler);

        client.on("end", closeHandler);

        client.on("connect", connectHandler);

        const key = `user_${userId}`;
        var sadd = (p1, ...args) => (new Promise((resolve, reject) => {
            client.sadd(p1, ...args, err => { if (err) { return reject(err) } resolve(); })
        }));
        var expire = (p1, p2) => (new Promise((resolve, reject) => {
            client.expire(p1, p2, (err, result) => { if (err) { reject(err) } resolve(result); })
        }));
        await sadd(key, ...tokens);
        await expire(key, (SECONDSPERTOKEN * count));
        return {
            statusCode: 200,
            // header:header,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ success: true,analytics:encoded_tokens}),
        };

    } catch (err) {
        console.log(err,"err")
        return {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            // header:header,
            body: JSON.stringify({ success: false, error: err }, null, 2),
        };
    }

}

exports.userData = async (event) => {
    console.log("called get tiken")
    const DEFAULTCOUNT = 40;
    const SECONDSPERTOKEN = 180;
    try {
        let tokens = [];
        // let encTokens = [];
        const userId = event.queryStringParameters.uid ? event.queryStringParameters.uid.trim() : undefined;
        const key = event.queryStringParameters.key ? event.queryStringParameters.key.trim() : undefined;

        if (!userId || !key) { throw new Error("Missing parameters") }

        const pad1 = key.slice(0, 3);
        const tstamp = +pad1 % 2 === 0 ? key.slice(3, -3) : key.slice(6);

        if ((Date.now() - parseInt(tstamp)) > 10000) { throw new Error("Missing parameters") }

        const privateKey = nanoid(30);
        const privateKeyHex = Buffer.from(privateKey).toString('hex');

        // console.log(privateKey, privateKeyHex);

        for (let i = 0; i < DEFAULTCOUNT; i++) {
            const token = nanoid();
            // const encryptedToken = sjcl.encrypt(privateKey, token, { mode: "ccm" });
            // encTokens.push(encryptedToken);
            tokens.push(token);
        }
        // console.log(encTokens)
        // console.log(tokens)
        // const encryptedTokenArray = sjcl.encrypt(privateKey, JSON.stringify({ dk: encTokens }));
        const encryptedTokenArray = sjcl.encrypt(privateKey, JSON.stringify({ dk: tokens }));

        let data = Buffer.from(encryptedTokenArray).toString('hex');

        if (Date.now() % 2 === 0) {
            const pos = Math.floor(Math.random() * 9) + 1;
            data = data + privateKeyHex + privateKeyHex.length.toString() + pos.toString();
        } else {
            data = privateKeyHex + data + privateKeyHex.length.toString() + "0";
        }

        if (!client) {
            client = redis.createClient({
                host: REDISENDPOINT,
                port: 6379
            });
        }

        client.off("error", errorHandler);

        client.off("end", closeHandler);

        client.off("connect", connectHandler);

        client.on("error", errorHandler);

        client.on("end", closeHandler);

        client.on("connect", connectHandler);

        const rdkey = `user_${userId}`;
        var sadd = (p1, ...args) => (new Promise((resolve, reject) => {
            client.sadd(p1, ...args, err => { if (err) { return reject(err) } resolve(); })
        }));
        var expire = (p1, p2) => (new Promise((resolve, reject) => {
            client.expire(p1, p2, (err, result) => { if (err) { reject(err) } resolve(result); })
        }));
        await sadd(rdkey, ...tokens);
        await expire(rdkey, (SECONDSPERTOKEN * DEFAULTCOUNT));
        return {
            statusCode: 200,
            // header:header,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ success: true, data: data }),
        };

    } catch (err) {
        console.log(err,"err")
        return {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            // header:header,
            body: JSON.stringify({ success: false, error: err }, null, 2),
        };
    }

}