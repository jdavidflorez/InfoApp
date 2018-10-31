//afectar una colección, todo está en el archivp de ejemplo que mostr´
const preguntasyrespuestas = require("./preguntasyrespuestasSchema");
exports.getpreguntasyrespuestass = (req, res) => {
  preguntasyrespuestas.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getpreguntasyrespuestas = (req, res) => {
  let id = req.params.id;
  preguntasyrespuestas.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newpreguntasyrespuestas = (req, res) => {
  const newpreguntasyrespuestas = new preguntasyrespuestas(req.body);
  newpreguntasyrespuestas.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newpreguntasyrespuestas);
  });
};

exports.updatepreguntasyrespuestas = (req, res) => {
  let nom = req.body.nombre;
  preguntasyrespuestas.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};

exports.deletepreguntasyrespuestas = (req, res) => {
  preguntasyrespuestas.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user._id);
  });
};
