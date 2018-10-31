//afectar una colección, todo está en el archivp de ejemplo que mostr´
const proyectos = require("./proyectosSchema");
exports.getproyectoss = (req, res) => {
  proyectos.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getproyectos = (req, res) => {
  let id = req.params.id;
  proyectos.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newproyectos = (req, res) => {
  const newproyectos = new proyectos(req.body);
  newproyectos.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newproyectos);
  });
};

exports.updateproyectos = (req, res) => {
  let nom = req.body.nombre;
  proyectos.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};

exports.deleteproyectos = (req, res) => {
  proyectos.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user._id);
  });
};
