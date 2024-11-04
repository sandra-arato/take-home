# Assumptions

A few shortcuts I had to take... 

## Design / UI

- I had to place the spending tracker in some context, so the rest of the components / page is a fast version of a working webapp. Not hooked up with the endpoints to save on time.

- Some basic functionality missing from the transactions / accounts usability, as it was not a priority, such as:
  - filtering transactiosn based on: category, time, account, bank, amount
  - connecting new accounts (onboarding for first time vs new when they already have something)
  - exploring credit accounts

- Filtering in the future would enable users to create spend trackers based on filter criteria - eg. in a given account, in a given category or description search -> new tracker

- Consideration of tagging vs saving of filters - which can be the same or different

- No mobile view right now. Multi column layout would flow into one, with some component level layout changes / styling changes. 

- Accounts: more accounts could be displayed by carousel, broken into several rows, or scrolled over by the user

- Transactions: seperate subpage to allow for filtering transactions - url params would be able to take the filter fields, so users can jump on to specific searches and bookmark it.

- Pagination of transactions - would implement offset based pagination, would not recommend infinite scrolling. Cursos based pagination is not needed in this case imho. 


## Implementation of spending tracker

- I tried to go as deep in the spending tracker as possible
- Connected the read endpoint, I didn't want to implement the rest because of time.
- Rest of updates are local only, will clear on page refresh

- I did not implement tests :((  major pitfall, will take full responsibility if this piece of code goes to prod. 

- I would implement tests for slices as well as custom components. For slices, more of a unit testing approach, for components and pages more of a functional testing approach. Would use testing-library for both. 

- the states for tracker (read, write, update, delete) are hooked up - all with the assumptions that I'd have REST endpoints for these, with a similar pattern of how transactions looked. 

- I would go back to design to chat about spending vs saving trackers / whether categories define either/or, and what happens to refunds in transactions in a given category in the context of the tracker.

- Spending subpage would allow a deep dive into the category based spending, with time based charts - so that users have a better understand of how their spending habits affect their tracked progress.


