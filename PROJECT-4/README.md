# Analog Clock

## Explanation
### HTML:
    The structure includes a clock face with three hands (hour, minute, and second) represented by div elements.
### CSS:
    The clock face is styled to look like a circle with a border, and the hands are positioned and styled to represent the hour, minute, and second hands. The transform-origin property is set to 100%, which means the rotation will occur around the end of the hand that is farthest from the center.
### JavaScript:
    The script calculates the current time and converts it into degrees to rotate the clock hands accordingly. The rotation degree is calculated based on the current second, minute, and hour. The setInterval function updates the hands every second to reflect the current time.

# Final Result
    When you open the HTML file in a browser, you should see an analog clock that updates every second, showing the current time. The clock hands will move smoothly, with the second hand making a full rotation every 60 seconds, the minute hand every 60 minutes, and the hour hand every 12 hours.