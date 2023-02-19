#![crate_name = "doc"]

/// A human being
pub struct Person {
    /// A person must have a name
    name: String,
}

impl Person {
    /// Returns a person with the given name
    pub fn new(name: &str) -> Person {
        Person {
            name: name.to_string(),
        }
    }

    /// Gives a friendly hello
    pub fn hello(& self) {
        println!("Hello, {}!", self.name);
    }
}

fn main() {
    let jojo = Person::new("Jojo");

    jojo.hello();
}
