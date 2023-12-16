class Monkey {
    public void jump() {
        System.out.println("Monkey is Jumping");
    }

    public void bite() {
        System.out.println("Monkey is biting");
    }
}

    interface BasicAnimal {
        void eat();

        void sleep();
    }

    class Human extends Monkey implements BasicAnimal  {
        public void eat() {
            System.out.println("Monkey is eating");
        }

        public void sleep() {
            System.out.println("Monkey is sleeping");
        }
    }


public class PrsetQ3andQ5 {
    public static void main(String[] args) {
        Human h=new Human();
        h.bite();
        h.eat();
        h.sleep();
        Monkey m=new Human();
        m.bite();
        m.jump();
        // m.eat();--->Reference is of monkey so not possible
    }
}
