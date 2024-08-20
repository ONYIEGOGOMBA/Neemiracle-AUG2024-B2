# Explanation

## HTML:
    Defines two forms (login and registration) within a container. The forms are set up to slide based on which link the user clicks.
## CSS:
    Handles the layout, styling, and sliding animation. The .container.switch class triggers the slide to switch between the forms.
## JavaScript:
    Listens for clicks on the "Login" and "Register" links, and toggles the switch class on the container to slide the forms.

# How It Works
When you click "Register" on the login form, the container's switch class is added, moving the registration form into view.
When you click "Login" on the registration form, the switch class is removed, moving the login form back into view.