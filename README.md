# Second version of a form used to generate quotes and an order sheet.

Per the recommendations of experienced developers, I tried to create something that solved a real-world problem of my own.

For my Home Inspection business, I have a third-party call center that takes my calls to set up inspections for me. 95% of the time the information is complete and accurate, but the other 5% of the time:

1. Information gets left blank
2. Information is inaccurate
3. Pricing seems slightly inconsistent between similar property types

So I created this order generator to help solve some of those issues. 

To combat points 1 & 2:

-I created fields that are mandatory before moving on to the next section. Some fields are intentionally left non-required.

-I added a "Google Search Address" function that pulls up a search of the address and the city that has been entered so that the property can be viewed on Zillow or Realtor.com in real-time while the order is being created. The call center staff already does this on their own (manuall), but hopefully this makes it easier and more seamless.

-One thing I would improve on in the future is adding regex expressions to make sure that emails, phone numbers, and other fields are valid.

To combat point 3:

-I created a function that calculates the inspection fee based on square footage, whether or not there is a crawlspace, if a radon test is being added on, and if additional areas (outside of the main structure) are requested to be inspected. There is also a manual override button in case there are funky/unique circumstances, or if the function doesn't work properly for whatever reason.

Other Features / Notes: 

-I created a button that generates a printable form of the completed information. It's not pretty, but it gets the job done.

-There were other features I intended to add but it got to a point where the solutions were too complex (for me) and I didn't understand my own code, so I left those things out. Examples: Only having the current step highlighted, adding regex, adding light/dark mode

-The "nextFunction" was originally very long and repetitive. I asked chatGPT if there was a way to make it simpler and, of course, there was. It gave me the idea to use an array instead. I'm sure that there are other ways my code in general could be simplified but this was my first time working with an array and it kicked my butt. I understand the concept, but haven't practiced much with it yet. 


