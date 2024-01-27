# Date and Time Logging API


This simple Express.js API allows you to log the current date and time into a text file and retrieve a list of text files saved in the "Date&Time" folder.

 # Usage


 1.  Run the application:

    
 .   npm start

  The API will start listening on the default port 8009. You can also specify a custom port using the PORT environment variable.


    2. Access the current date and time:
    

. Make a GET request to the root endpoint (/):



.    http://localhost:8009

This will create a text file in the "Date&Time" folder with the current date and time as the filename and content.


3. Retrieve a list of text files:
   

.Make a GET request to the "/txtdata" endpoint:




.     http://localhost:8009/txtdata

This will return a JSON array containing the names of all text files in the "Date&Time" folder.


# Endpoints

GET /:

. Creates a text file with the current date and time as the filename and content.


 GET /txtdata:

. Retrieves a list of text files in the "Date&Time" folder.

# Response Format

# Success Response (GET /):

. Status Code: 200 OK

. Response Body: The content of the newly created text file.

# Success Response (GET /txtdata):

. Status Code: 200 OK

. Response Body: JSON array containing names of text files.

# Error Response:

. Status Code: 500 Internal Server Error

. Response Body: "Files not found" or generic error message.

# Customization

. You can change the default port by setting the PORT environment variable.

. The files are stored in the "Date&Time" folder. If needed, you can modify the folder name in the code.

. Feel free to explore and enhance this simple API according to your requirements!
