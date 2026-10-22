const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('Content \n')
      res.write('More content \n')
      res.write('Hello World')    
      res.write(`
    <table>
      <thead>
        <tr>
          <th>Cities</th>
          <th>Reasons</th>
          <th>Distance To Favorite City</th>
          <th>Cost To Travel</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tokyo</td>
          <td>I really enjoy Japan's culture and architecture</td>
          <td>12 hr 50 min</td>
          <td>$1,096+</td>
        </tr>
        <tr>
          <td>Paris</td>
          <td>I think it would be fun for sightseeing</td>
          <td>10 hr 55 min</td>
          <td>$1,581+</td>
        </tr>
        <tr>
          <td>New York</td>
          <td>Very popular city that feels like a bucket list item</td>
          <td>5 hr 20 min</td>
          <td>$367+</td>
        </tr>
        <tr>
          <td>Los Angeles</td>
          <td>Also another popular city that feels like a bucket list item. Going
            to a music event there could be fun.</td>
          <td>1 hr</td>
          <td>$222+</td>
        </tr>
      </tbody>
    </table>
        `)
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})
