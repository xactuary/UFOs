# The Truth is Out There - Web App to view UFO Sitings
![](https://github.com/xactuary/UFOs/blob/main/Resources/title.PNG)
## SUMMARY
The goal of this project was the creation of a web app using Javascript and HTML that allows the user to look through a database of UFO sightings with various filters on the data.
### BACKGROUND
In this project, a table was created to organize UFO data with the ability to filter the data by different identifier variables in the data.  This table of data is deployed in a formatted webapp that is available to the publich to use.  Javascript (JS) allows the app to be interactive and the user can select how they would like to see the data.  JS is combined with HTML and Bootstrap to present the web app with background images and colors that make the site appealing to the user.  

#### DATA PROVIDED
List of UFO sitings that includes the following variables
1. City
2. State
3. Country
4. Date of sighting
5. Shape of object seen
6. Comments and description

## ANALYSIS

The web app is simple to use.  First of all, you can click on the following link tolaunch the app which has been deployed through GitHub:

https://xactuary.github.io/UFOs/ 

If you scroll to the bottom of the page you will see the table of data that is available.  This is what the data table will look like:

![](https://github.com/xactuary/UFOs/blob/main/Resources/datasample.PNG)

If you don't want to scroll through all the data, you can use the filter boxes as shown below:

![](https://github.com/xactuary/UFOs/blob/main/Resources/cleansearch.PNG)

To use the boxes, just type in a value in one of the filters and press Enter.  For example, we type in the city name of "el cajon" and press the Enter Key. This means that the table below will only show events from the city el cajon but will show all dates and shapes for that city.  

![](https://github.com/xactuary/UFOs/blob/main/Resources/elcajon.PNG)

The result is five entries for the city of el cajon.  To further filter the data, just go back to a filter box and fill in a value for another variable.  So let's try the date of 1/4/2010 and press Enter.  Now the filter comes back with just one instance.

![](https://github.com/xactuary/UFOs/blob/main/Resources/searchresult.PNG)

So that's how easy it is to navigate the webapp and view the data in whatever filter format you would like.


## SUMMARY
This web app is simple to use and fun to look at.  However, there are limitations which include the fact that the dataset is very small so most arbitrary search criteria entered will return an empty dataset.  In addition, the filter boxes are case sensitive so exact match is required.  These drawbacks would be greatly improved by using some web scraping abilities to find more data to append to the current data set and to do some fuzzy matching so the filter is not case sensitive.  Another improvement that could be added to the website that would help with the problem of too little data would be to add a drop down menu that includes just the data filter answers that are available.  For example, the date box could have a drop down list of the dates available and the user could select one of these.  


