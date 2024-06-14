# print all the files names and contents in the _BlogPosts directory
# and write the data to a json file in this format:

# [
    # {
    #     title: "[title]",
    #     img: "[img.jpg]",
    #     author: "[author here]",
    #     date: "[date]",
    #     md: "[MD here]",
    #     tags: "[tags here]",
    #     description: "[description here]"
    # }
# ]

# the data for the json file can be found in a YAML front matter format similar to Jekyll

import os
import json

# get all the files in the _BlogPosts directory
def getFiles():
    files = []
    for file in os.listdir("_BlogPosts"):
        if file.endswith(".md"):
            files.append(file)
    return files

# get the contents of the files
def getContents(files):
    contents = []
    for file in files:
        with open("_BlogPosts/" + file, "r") as f:
            contents.append(f.read())
    return contents

# get the title of the blog post
def getTitle(content):
    title = content.split("\n")[1].replace("title: ", "")
    title = title.replace("#", "")
    title = title.strip()
    return title

# get the date of the blog post
def getDate(content):
    date = content.split("\n")[4].replace("date: ", "")
    date = date.replace("#", "")
    date = date.strip()
    return date

# get the tags of the blog post
def getTags(content):
    tags = content.split("\n")[5].replace("tags: ", "")
    tags = tags.replace("#", "")
    tags = tags.strip()
    return tags

# get the author of the blog post
def getAuthor(content):
    author = content.split("\n")[3].replace("author: ", "")
    author = author.replace("#", "")
    author = author.strip()
    return author

# get the md of the blog post
def getMD(content):
    md = content.split("\n")[9:]
    # filter out emply "" from content
    md = list(filter(lambda x: x != "", md))
    return md

def getDescription(content):
    description = content.split("\n")[6].replace("description: ", "")
    description = description.replace("#", "")
    description = description.strip()
    return description

# write the data to a json file
def writeData(data):
    with open("./src/data/BlogData.json", "w") as f:
        json.dump(data, f, indent=4)

# main function
def main():
    files = getFiles()
    contents = getContents(files)
    data = []
    for content in contents:
        data.append({
            "title": getTitle(content),
            "img": "img.jpg",
            "author": getAuthor(content),
            "date": getDate(content),
            "tags": getTags(content),
            "description": getDescription(content),
            "md": getMD(content),
            "text": content,
        })
    writeData(data)

if __name__ == "__main__":
    main()
