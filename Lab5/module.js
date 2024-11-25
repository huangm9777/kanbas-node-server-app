const module = {
    id: "M301", name: "Spacecraft Structural Design",
    description: "Fundamentals of designing spacecraft structures and materials selection.",
    course: "RS103"
};

export default function RetrieveModule(app){
    app.get("/lab5/module", (req, res) => {
        res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });
    

}