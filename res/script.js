var userinfo = {"status": 200, "user_id": "0123456789", "user_email": "user@email.com", "total_files": 58, "stats":{"download_today":442, "stream_today":233}}


document.getElementById("userinfo").innerHTML = JSON.stringify(userinfo, undefined, 2);




var fileinfo = {"status": 200, "file_status": "Published","filename": "Detective Conan Movie 01 The Timed Skyscraper.mkv","drive_id": "1ikf5mPHtMzvaTDEmCD8vGg8viUwi2zq3","size": "425580531","views": 4,"mime": "video/x-matroska","thumbnail": "https://res.cloudinary.com/roosterkid/image/upload/v1560678642/copydrive/ra2eqzip54i4hv2wlnke.jpg","added": "16-Jun-2019 04:50:32 pm"}


document.getElementById("fileinfo").innerHTML = JSON.stringify(fileinfo, undefined, 2);



var addfile = {"status": 200, "id": "1gu3zca", "url": "https://files.cx/id/1gu3zca", "file_info":{"name": "Detective Conan Movie 01 The Timed Skyscraper.mkv","mimeType": "video/x-matroska","size": 425580531,"owners": "Username","owners_email": "user@email.com"}}


document.getElementById("addfile").innerHTML = JSON.stringify(addfile, undefined, 2);



var addcopy = {"status": 200, "id": "1rqlz9z", "url": "https://files.cx/id/1rqlz9z", "file_info":{"name": "Detective Conan Movie 01 The Timed Skyscraper.mkv","mimeType": "video/x-matroska","size": 425580531,"owners": "Username","owners_email": "user@email.com"}}
document.getElementById("addcopy").innerHTML = JSON.stringify(addcopy, undefined, 2);

var addcaption = {"status": 200, "embed_url": "https://files.cx/stream/1rqlz9z"}
document.getElementById("addcaption").innerHTML = JSON.stringify(addcaption, undefined, 2);
