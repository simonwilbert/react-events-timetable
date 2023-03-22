# react-events-timetable

[Story Book](https://react-events-timetable.vercel.app/)

# Usage

- Install the package `yarn add react-events-timetable`
- Import the component where you want it `import { Timetable } from "react-events-timetable";`
- Have handy an array of events
  ```
      const events = [
        { 
          name: "Event 1",
          description: "Description 1",
          sessions: [
            {
              from: new Date(...),
              to: new Date(...),
            },
            {
              from: new Date(...),
              to: new Date(...),
            },
          ],
          tags: [
            {
              name: "Tag 1",
              type: TAG_LOCATION_TYPE | TAG_ACTIVITY_TYPE | TAG_AGE_TYPE
            }
          ],
          venue: {
            name: "Venue 1"
          },
      ];
  ```
- Use where you want it to render
  ```
    <Timetable
      from={new Date()}
      to={new Date()}
      tags=[{ name: "Tag 1"}, ...]
      events
      groupedBy: "LOCATIONTYPE" | "AGETYPE" | "ACTIVITYTYPE"
    />
  ```
  <img width="1226" alt="image" src="https://user-images.githubusercontent.com/588535/227063756-6c8b4284-bcd9-4049-938d-b7598c23d844.png">

  ```
