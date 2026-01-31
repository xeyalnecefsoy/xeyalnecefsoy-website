# Final Appwrite Setup

The site is connected! Just finish the setup in the Appwrite Dashboard.

1.  Click **"Skip"** on the waiting screen.
2.  Go to **Databases** -> **Create Database** -> Name: `main`, ID: `main`.
3.  Click on `main`, then **Create Collection** -> Name: `projects`, ID: `projects`.
4.  Add Attributes to `projects`:
    - `title` (String, 255, Required)
    - `desc` (String, 5000, Required)
    - `slug` (String, 100, Required)
    - `category` (String, 50, Required)
    - `image` (Url, Required)

Then visit `http://localhost:3000/admin` to manage your content!
