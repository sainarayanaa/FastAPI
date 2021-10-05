Full stack FastAPI Project

To-do App

Reactjs + FastAPI + MongoDB used to create To-do App for explaining some of the FastAPI Concepts.
Backend: 
   1.mongoDB (install with mongo DB compass for GUI control and access) 
    https://www.mongodb.com/try/download/community
   2.After installation of mongo DB, open mongo DB compass and paste below link in new connect   
   dialog box and click connect
   mongodb://localhost:27017/
 Middleware FastAPI
   1. You can install middleware packages by running below command from backend folder
   pip install -r requirements.txt
   2.To run middleware use command
   uvicorn main:app --reload
   (uvicorn is Fast ASGI server which helps in the interaction between app and the backend)
   Frontend:
   1.Frontend is created using Reactjs, so you require some node modules to be installed
   npm install
  2.You can run frontend by running
  npm start
