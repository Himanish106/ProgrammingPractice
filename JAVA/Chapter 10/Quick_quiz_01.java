class Animal {
    String colour;
    String breed;

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getColour() {
        return colour;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getBreed() {
        return breed;
    }
}
    class Dog extends Animal
    {
        String name;

        public void setName(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }
    }
public class Quick_quiz_01
{
    public static void main(String[] args) {
        Dog d=new Dog();
        d.setColour("Golden");
        d.setBreed("Golden Retriever");
        d.setName("Pochi");
        System.out.println("The name of the dog is "+d.getName());
        System.out.println("The breed of the dog is "+d.getBreed());
        System.out.println("The colour of the dog is "+d.getColour());
    }
}
