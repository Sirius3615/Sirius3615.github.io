# The Astronomy API


![](https://i.imgur.com/gVIjrfP.png)

# Visits the [Astronomy Events API website](https://astronomy-events-api.glitch.me) for more info!

![](https://i.imgur.com/5K6KCcX.png)
  <br/><br/>
    <p>
       Astronomy Events API is organized around a simple github page filled with data thats really easy to use. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes..
  </p>
    <p>
      The main URL you are gonna use is: <code class="red-code">https://sirius3615.github.io/ </code> <br>  There isn't any form of API key (authentication) or such.
  </p>
  
  <h1>
   By Specific Date
  </h1>
  <p>
    The output of this API request will give you the current event/info for a specific date you enter. <br> 
    The request URL you are gonna use is: <code class="red-code">https://sirius3615.github.io/data/by-date/1-3-2021.json</code>
    <br>
    The last part for the date of the day can be changes like in the request preview bellow. <br>Date format has to be: <code class="red-code">1-3-2021</code>  And yes the <code class="red-code">.json</code> ending has to be there!
  </p>
  <br/>
  <h5>
    Request:
  </h5>
  ![](https://i.imgur.com/ip5Ixdx.jpg)
  <br/><br>
  <h5>
    Response:
  </h5>
    ![](https://i.imgur.com/fFGtu2P.jpg)
    
   <h1>By Specific Month</h1>
  <p>
    The output of this API request will give you most important events/info for a specific month you enter. <br> 
    The request URL you are gonna use is: <code class="red-code">https://sirius3615.github.io/data/by-month/3.json</code>
    <br>
    The last part for the month can be changes like in the request preview bellow.
  </p>
  <br>
  <h5>
    Request:
  </h5>
  ![](https://i.imgur.com/QoPpCRM.jpg)
  <br/><br>
  <h5>
    Response:
  </h5>
    ![](https://i.imgur.com/fqH7AMO.jpg)
  
  <h1>By Specific Year</h1>
  <p>
    The output of this API request will give you most important events/info for a specific year you enter. <br> 
    The request URL you are gonna use is: <code class="red-code">https://sirius3615.github.io/data/by-year/2021.json</code>
    <br>
    The last part for the year can be changes like in the request preview bellow.
  </p>
  <br>
  <h5>
    Request:
  </h5>
  ![](https://i.imgur.com/SsiZvLH.jpg)
  <br/><br>
  <h5>
    Response:
  </h5>
    ![](https://i.imgur.com/fqH7AMO.jpg)
  <br><br>
  <h1>All Events for current month</h1>
  <p>
    The output of this API request will give you all events/info for current month. <br> 
    The request URL you are gonna use is: <code class="red-code">https://sirius3615.github.io/data/all-events/events.json</code>
  </p>
  <br>
  <h5>
    Request:
  </h5>
  ![](https://i.imgur.com/mq1pNXp.jpg)
  <br/><br>
  <h5>
    Response:
  </h5>
    ![](https://i.imgur.com/nSivUmX.jpg)
  <br><br>
  <h1>Note:</h1>
  <p>
    Please be kind enough and try to cache the results, so you dont request the API dozen times a minute for same results. But you probably know that better then me and what is or is not suitable for your aplication.
  </p>
  <p>
    All the past events/info will be deleted after its date/month/year has passed.
  
  
  Wanna test if your aplication works? Use <code class="red-code">https://sirius3615.github.io/test.json</code><br>
  It will return a result that is output of a single event.
    </p>
  
