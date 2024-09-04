Deployment Steps
1. In your command prompt of choice, navigate to a directory in which you would like to store the code
2. The run the following command to clone the codebase to your machine
  git clone https://https://github.com/greglock1997/BlackstarFilmFestival/
3. Assuming you have npm installed, run
   'npm run dev'
4. Then in your browser, navigate to http://localhost:5173/ or any alternative path shown in the command prompt

Task Evaluation
For this task I chose to use React.jsx and vanilla CSS since I'm familiar with both, and React makes it very simple to create webpages with UI that are responsive to user input and action, as well as being able to track state values. To begin I began by looking through the design files in Figma to get a better understanding of the layout of the page. Seperating the page into components such as <Main>, <Footer>, <Header> etc. Later I implemented React Router so that I could show different pages for the details of each film and to keep them seperate from the results page. I tried to keep everything fairly compartmentalised including styling, to keep changes easier to track.

Notes
- Please ignore my last few commits, I was trying to configure the application to work with GitHub pages and things started to get messy
- If I had more time I would've liked to have added Jest unit tests for each component as well as seperating more of the UI into components and even pages
- The 'Panama-Bold' font didn't seem to work, so I used the 'Matter-Medium' instead in many places
- I tried to keep the design as close to the Figma design sheet as possible but had to 'cut corners' or make substitutions in certain places
