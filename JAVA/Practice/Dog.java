 class Dog {
    String name;
    int weight;
    Dog(){
//        System.out.println("This is a default constructor");
        weight=45;
    }

     public void setWeight(int weight) {
         this.weight = weight;
     }

     public int getWeight() {
         return weight;
     }

     public void setName(String name) {
         this.name = name;
     }

     public String getName() {
         return name;
     }
 }
