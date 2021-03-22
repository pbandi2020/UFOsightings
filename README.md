# UFOs
## Overview of Project
The purpose of this project is to build a **Responsive, Dynamic and Interactive webpage** that will help the citizens vizualize the UFO Sighting data.
  
## Results
### The screenshot below shows the UFO Sighting results for January 13th 2010

<img src="/static/images/UFOSightings.png" width="750" /> </td>


### How the webpage works and how to use the search criteria form:
1.  Refresh the browser or click on the **UFO Sightings** link on the nav bar to load all the data. This will reset all the search criteria allowing full access to the complete dataset
2.  Next, use the search criteria on the left side of the webpage to narrow the result set. As you enter the criteria and hit enter the data table to the right of the search box will load data that matches the criteria. The example image above shows results for filter criteria **Date = 1/13/2010**
3.  Following are the various filters that can be applied **(Date, City, State, Country and Shape)** 
4.  The logic for the search is **AND**. Which mean as you apply new filters, the result set will be altered to match both the conditions applied
5.  As the logic is build using the **"OnChange" HTML event**, the dataset is refined as you hit **Enter Key** in each **INPUT** box.

## Summary

Using **HTML and JavaScript** we were able to build a **Interactive and Dynamic webpage** that provides a data vizualization layer. The **BootStrap** and **D3** libraries provided us with tools to build datatables and make the page responsive. We also used **CSS Style Sheets** to help cutomize the UI aspect of our webpage. 

 
