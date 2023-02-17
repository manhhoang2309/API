//Get Btn And Create Function
//Dùng Id myBtn đã tạo bên file HTML sau đó .addEventListener để nghe lệnh click Chuột
document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
    // console.log('test');
    // In data để test thử function hoạt động tốt không
    //Get API
    // lấy API
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);
            // In dữ liệu người dùng
            //Get Data Value
        // dùng let tạo variable output
            let output = "<h2><center>Get User Data</center></h2>";

            //Get Data Loop Through
        // Tạo list data cần Fetch API
            author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Phone Number: ${lists.cell}</li>
                            <li class="list-group-item">DOB: ${lists.dob.date}</li>
                            <li class="list-group-item">Age: ${lists.dob.age}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Gender: ${lists.gender}</li>
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                            <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                        </ul>
                    </div>
                </div> `;
            });

            //Show On Our Screen All Data
        // thể hiển output
            document.getElementById('output').innerHTML = output;

        });
};
