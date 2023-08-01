const Picture = require('./picture.model');
const fs = require('fs');

exports.save = (req, res) => {
    if (req.file && req.body.title) {
        const file = req.file;
        const path = file.path;
        const type = file.originalname.split('.')[1];

        let promise = fs.promises.readFile(path);
        Promise.resolve(promise).then((buffer) => {
            Picture.create({ title: req.body.title, image: buffer, type: type}).then((data) => {

                let remove = fs.promises.unlink(path);
                Promise.resolve(remove).then(() => {
                    return res.send(`
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
                        <div class="container is-justify-content-center is-align-content-center">
                            <h1 class="title has-text-centered">A imagem está salva</h1>
                            <h2 class="subtitle has-text-centered">O id da imagem é: ${data.id}</h2>
                            <h2 class="subtitle has-text-centered">
                                <a class="is-link button" href="/">Retornar</a>
                            </h2>
                        </div>
                    `);
                })
            })
        })
    }
}

exports.get = (req, res) => {
    
    if (req.query.id) {
        let id = req.query.id;
        Picture.findByPk(id).then((data) => {
            if (data) {
                const image = data.image.toString('base64');
                const title = data.title
                const type = data.type;
                const src = `data:image/${type};base64, ${image}`;

                return res.json({ success: true, title: title, src: src })
            }
            return res.json({ success: false })
        })
    }
}



