- This is a full stack application (Bene's grocery) which provides e-commerce expericence.
- The front-end is built via Angular and hosted via S3.
- The backend is built via Node.js and hosted via Elastic Beanstalk.
- The database is Postgres from RDS.
- The front-end query product-list data from backend via product index route:
  http://beneapi.us-east-1.elasticbeanstalk.com/products
- Infrastucture diagram:
  <img src="https://github.com/Jocelyn59435/bene_store_fullstack/blob/master/screenshots/diagram.png" width="200" height="500">
- Pipeline diagram:
  ![diagram](../screenshots/circleci_pipeline_diagram.png)
