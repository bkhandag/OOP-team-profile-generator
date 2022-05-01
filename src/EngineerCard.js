function EngineerCard (data) { 

    return `
    <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <div class="card">
            <div class="card-header text-light bg-secondary">
                <h3>${data.getName()}</h3>
                <h4> <i class="fa-solid fa-glasses"></i> ${data.getRole()}</h4>
            </div>
            <div class="card-body">
                <div class="card">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.getId()}</li>
                    <li class="list-group-item">Email: ${data.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${data.getGithub()}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
}

module.exports = EngineerCard;