// function TokenGenerator() {
//   this.tokens = []
//   this.count = 20;
//   this.uid = Date.now();
// }

// TokenGenerator.prototype.fetchTokens = function () {
//   return new Promise((resolve,reject)=>{
//     if(this.tokens.length < (this.count / 2)) {
//       var httpRequest = new XMLHttpRequest();
//       var _this = this;
  
//       if (!httpRequest) {
//         console.log('Giving up :( Cannot create an XMLHTTP instance');
//         return false;
//       }
//       httpRequest.onreadystatechange = function() {
//         try {
//           if (httpRequest.readyState === XMLHttpRequest.DONE) {
//             if (httpRequest.status === 200) {
//               var result = JSON.parse(httpRequest.responseText);
//               if(result.success) {
//                 _this.tokens = _this.tokens.concat(result.data.tokens);
//                 console.log(_this.tokens)
//                 resolve()
//               }
//             } else {
//               reject()
//               console.log('There was a problem with the token request.');
//             }
//           }
//         } catch(e) {
//           reject()
//           console.log('There was a problem with the token request.');
//         }
//       };
//       // httpRequest.open('GET', 'http://localhost:9191'+'/get-tokens?uid='+this.uid);
//       // httpRequest.open('GET', 'http://localhost:3000'+'/get-tokens?uid='+this.uid);
//       httpRequest.open('GET', 'https://ddzaf45tyj.execute-api.us-east-1.amazonaws.com/dev'+'/get-tokens?uid='+this.uid);
  
  
//       httpRequest.send();
//     }
//   })
  
// }

// var TGN = new TokenGenerator();

function TokenGenerator() {
  this.tokens = []
  this.count = 20;
  this.uid = Date.now();
}

TokenGenerator.prototype.fetchTokens = function () {
  return new Promise((resolve,reject)=>{
    if(this.tokens.length < (this.count / 2)) {
      var httpRequest = new XMLHttpRequest();
      var _this = this;
  
      if (!httpRequest) {
        console.log('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      httpRequest.onreadystatechange = function() {
        try {
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
              var result = JSON.parse(httpRequest.responseText);
              if(result.success) {
                let responseText  =  JSON.parse(httpRequest.responseText)
                console.log(responseText)
                let atob = window.atob(responseText.data) 
                let arr = atob.split('/')
                
                arr.forEach(element => {
                  let remove_j =  element.replace(/j/g,'a');
                  _this.tokens.push(remove_j)
                });
                _this.tokens = _this.tokens.filter(v=>v!='');
                console.log(_this.tokens)
                resolve()
              }
            } else {
              reject()
              console.log('There was a problem with the token request.');
            }
          }
        } catch(e) {
          reject()
          console.log('There was a problem with the token request.');
        }
      };
      // httpRequest.open('GET', 'http://localhost:9191'+'/get-tokens?uid='+this.uid);
      // httpRequest.open('GET', 'http://localhost:3000'+'/get-tokens?uid='+this.uid);
      httpRequest.open('GET', 'https://ddzaf45tyj.execute-api.us-east-1.amazonaws.com/dev'+'/p?uid='+this.uid);
  
  
      httpRequest.send();
    }
  })
  
}

var TGN = new TokenGenerator();
