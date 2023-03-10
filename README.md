# Simple Pagination Table

Simple application containing pagination tables using data from api.

## How to run project?

First install all the dependencies:

### `npm install`

After that, you are ready to start the project:

### `npm start`

## Used technologies:
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/><img src="https://styled-components.com/atom.png" alt="redux" width="40" height="40"/><img src="https://embed.zenn.studio/api/optimize-og-image/a62d22ac5a424b6d1042/https%3A%2F%2Fmui.com%2Fstatic%2Flogo.png" alt="redux" width="40" height="40"/>

## Task

The goal of the task is to implement SPA application with just one view. You should use the below API endpoint to display the paginated list of products. At the top of the view, there should be text input, which allows the user to filter results by id. The input should accept only numbers, other signs should not even appear. Below this input user should see a table displaying the following items’ properties: id, name, and year. Additionally, the background colour of each row should be taken from the colour property. After clicking on a row a modal should be displayed and should present all item data. The table should display 5 items per page. Under the table, there should be a pagination component, which allows switching between pages with “next” and “previous” arrows.

Please remember about handling situations when API endpoint returns a 4XX or 5XX error. In such a case the user should be informed about the error.

Apart from React, the technology stack totally ups to you, the same applies to styling. As a result of the task, we expect a link to a repository on GitHub, GitLab, or bitbucket. Your app should start after running npm install & npm start.

### Extra requirement (optional):

Please reflect pagination and filtering in the address URL, so users can copy and share the URL with each other.

### API endpoint

https://reqres.in/api/products

### Remarks:

- filtering and pagination should be performed within the API, not on the frontend side

- take into account that API returns 12 items in total

- after changing the page it should be possible to copy-paste web browser URL to another tab, where this exact page should be displayed on the start

### Tips

per_page field lets you set the number of items per page
page field lets you set the page number of results
id field lets you filter results by id
Proposed styling library(contains also icons): https://mui.com/
