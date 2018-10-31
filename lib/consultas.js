//afectar una colección, todo está en el archivp de ejemplo que mostr´
const consultas = require("./consultasSchema");
exports.getconsultass = (req, res) => {
  consultas.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getconsultas = (req, res) => {
  let id = req.params.id;
  consultas.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newconsultas = (req, res) => {
  const newconsultas = new consultas(req.body);
  newconsultas.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newconsultas);
  });
};

exports.updateconsultas = (req, res) => {
  let nom = req.body.nombre;
  consultas.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};

exports.deleteconsultas = (req, res) => {
  consultas.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user._id);
  });
};
