Something to note, _files_ should not be stored in databases, they are not optimized for that. Databases are made to store things like usernames etc. Instead you should use the File System (hard drive) instead.

Now the thing relating to the file that _should_ be on the database, would be the path to that file

Something else, as soon as you need to upload files, in the form action in the html/ejs, you need to add an enctype. For this we used "multipart/form-data"
