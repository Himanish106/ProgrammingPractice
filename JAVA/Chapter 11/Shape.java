abstract class Shape
{
  int radius;
  int length,breadth,squarelength;
  Shape()
  {
  }
  Shape(int l,int b) {
      length=l;
      breadth=b;
  }
    Shape(int r) {
       radius=r;
    }
    public int getRadius() {
        return radius;
    }
      public int getLength () {
          return length;
      }
      public int getBreadth () {
          return breadth;
      }

    public void setSquarelength(int squarelength) {
        this.squarelength = squarelength;
    }

    public int getSquarelength() {
        return squarelength;
    }

    abstract public int Area();
    abstract public int Perimeter();
}
