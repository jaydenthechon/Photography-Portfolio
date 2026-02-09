# Blog System Guide

## Overview

Your photography portfolio now includes a fully functional blog! Blog posts are React components, giving you complete control over formatting, images, and content.

## Folder Structure

```
src/
├── blog/
│   ├── blogIndex.js          # Blog configuration and post list
│   └── posts/                # All blog posts
│       ├── example-post/
│       │   └── index.js      # Example blog post component
│       ├── your-post-name/
│       │   └── index.js
│       └── another-post/
│           └── index.js
└── components/
    ├── Blog.js               # Blog listing page
    ├── Blog.css
    ├── BlogPost.js           # Individual post viewer
    └── BlogPost.css
```

## Creating a New Blog Post

### Step 1: Create a new folder for your post

```bash
mkdir src/blog/posts/my-new-post
```

### Step 2: Create an `index.js` file in that folder

```javascript
// src/blog/posts/my-new-post/index.js
import React from 'react';

const MyNewPost = () => {
  return (
    <>
      <p>
        Your blog post content goes here. You can use regular HTML/JSX.
      </p>

      <h2>Section Heading</h2>
      <p>
        More content here...
      </p>

      <h3>Subsection</h3>
      <ul>
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
      </ul>

      <blockquote>
        "A quote goes here"
      </blockquote>
    </>
  );
};

export default MyNewPost;
```

### Step 3: Register the post in `blogIndex.js`

1. Import your post component at the top:
```javascript
import MyNewPost from './posts/my-new-post';
```

2. Add it to the `blogPosts` array:
```javascript
export const blogPosts = [
  {
    id: 2,                    // Unique ID
    slug: 'my-new-post',     // URL slug (must match folder name)
    title: 'My New Blog Post',
    excerpt: 'A brief summary that appears on the blog listing page...',
    date: 'February 10, 2026',
    category: 'Photography Tips',  // or 'Personal', 'Tutorial', etc.
    author: 'Jayden',
    coverImage: null,        // Optional: path to cover image
    component: MyNewPost     // The component you imported
  },
  // ... other posts
];
```

### Step 4: Done!

Your new post will automatically appear on the blog page at `/blog` and be accessible at `/blog/my-new-post`.

## Adding Cover Images

To add a cover image to your post:

1. **Use a photo from your gallery:**
```javascript
coverImage: require('../assets/images/photos/street/portfolio-001.jpg')
```

2. **Add a new image to your post folder:**
```
src/blog/posts/my-post/
├── index.js
└── cover.jpg
```

Then reference it:
```javascript
import coverImage from './cover.jpg';

// In blogIndex.js:
coverImage: coverImage
```

## Content Styling

Your blog posts support:

- **Headings:** `<h2>`, `<h3>` for sections
- **Paragraphs:** `<p>` for regular text
- **Lists:** `<ul>`, `<ol>` for bullet/numbered lists
- **Quotes:** `<blockquote>` for pull quotes
- **Images:** `<img src={...} alt="..." />`
- **Code:** `<code>` for inline code, `<pre><code>` for code blocks
- **Links:** `<a href="...">` for external/internal links

### Example with Images

```javascript
import React from 'react';
import photo1 from '../assets/images/photos/street/portfolio-001.jpg';

const MyPost = () => {
  return (
    <>
      <p>Check out this amazing shot:</p>
      <img src={photo1} alt="Street photography example" />
      <p>This was taken in downtown Boston...</p>
    </>
  );
};

export default MyPost;
```

## Blog Post Template

Here's a complete template to get started:

```javascript
import React from 'react';

const PostName = () => {
  return (
    <>
      <p>
        Opening paragraph introducing the topic...
      </p>

      <h2>Main Section</h2>
      <p>
        Content for this section...
      </p>

      <h3>Subsection</h3>
      <p>
        More detailed content...
      </p>

      <ul>
        <li>Key point 1</li>
        <li>Key point 2</li>
        <li>Key point 3</li>
      </ul>

      <blockquote>
        "An inspiring quote related to photography"
      </blockquote>

      <h2>Another Section</h2>
      <p>
        Continuing the discussion...
      </p>

      <p>
        Closing thoughts and conclusion...
      </p>
    </>
  );
};

export default PostName;
```

## Categories

Common category suggestions:
- `Personal` - Personal updates and stories
- `Photography Tips` - Techniques and advice
- `Tutorial` - Step-by-step guides
- `Gear Review` - Equipment reviews
- `Behind the Scenes` - BTS content
- `Travel` - Travel photography stories
- `Post-Processing` - Editing tips

## Accessing the Blog

- **Blog listing:** Visit `/blog` or click "Blog" in the navigation
- **Individual posts:** Click on any post card or navigate to `/blog/post-slug`

## Tips

1. **Keep slugs simple:** Use lowercase and hyphens (e.g., `my-first-post`)
2. **Write compelling excerpts:** This appears on the blog listing page
3. **Use descriptive titles:** Make it clear what the post is about
4. **Add dates:** Keep posts chronologically organized
5. **Include images:** Visual content makes posts more engaging
6. **Use proper formatting:** Break up text with headings and lists

## Example Post Structure

Good blog posts often follow this structure:

1. **Hook** - Opening paragraph that grabs attention
2. **Introduction** - What the post is about
3. **Main Content** - Your key points with headings
4. **Examples/Images** - Visual elements
5. **Conclusion** - Summary and call-to-action

Enjoy blogging about your photography journey! 📸
