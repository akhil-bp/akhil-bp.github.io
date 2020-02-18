# akhil-bp.github.io

create a redis host and port

create role for access redis, this role used in lambda function, vpc , subnet etc > AmazonElastiCacheFullAccess,AWSLambdaVPCAccessExecutionRole
create role for access s3 > AmazonS3ReadOnlyAccess
both role have relationship as >
          "Service": [
          "apigateway.amazonaws.com",
          "lambda.amazonaws.com"
        ]
        
 upload a auth and gettoken lambda api or functions
 
 create an api for get file
      create resopurce
      create methid get
      method execution > methid request >
        add authorizer from Authorizer
        Request Paths > folder > proxy
      integration request
        aws servise > Simple Storage Service (S3)  > GET > {bucket}/{object}  > add role > 
        urlpath parameter bucket > method.request.path.folder
                          object > method.request.path.proxy
                          
      method response 
        200 > Access-Control-Allow-Origin	> Content-Type	
        400
        500
      integration response 
        Access-Control-Allow-Origin	> '*'
        Content-Type	> integration.response.header.Content-Type	
        HTTP status regex > 4/d{2}	400 > 5/d{2} 500	

                    
        
        

