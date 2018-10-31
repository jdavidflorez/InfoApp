//afectar una colección, todo está en el archivp de ejemplo que mostr´
const usuarios = require("./usuariosSchema");
exports.getusuarioss = (req, res) => {
  usuarios.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getusuarios = (req, res) => {
  let id = req.params.id;
  usuarios.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newusuarios = (req, res) => {
  const newusuarios = new usuarios(req.body);
  newusuarios.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newusuarios);
  });
};

exports.updateusuarios = (req, res) => {
  let nom = req.body.nombre;
  usuarios.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};

exports.deleteusuarios = (req, res) => {
  usuarios.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user._id);
  });
};
