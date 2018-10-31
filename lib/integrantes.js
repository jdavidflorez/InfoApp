//afectar una colección, todo está en el archivp de ejemplo que mostr´
const integrantes = require("./integrantesSchema");
exports.getintegrantess = (req, res) => {
  integrantes.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getintegrantes = (req, res) => {
  let id = req.params.id;
  integrantes.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newintegrantes = (req, res) => {
  const newintegrantes = new integrantes(req.body);
  newintegrantes.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newintegrantes);
  });
};

exports.updateintegrantes = (req, res) => {
  let nom = req.body.nombre;
  integrantes.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};

exports.deleteintegrantes = (req, res) => {
  integrantes.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user._id);
  });
};
