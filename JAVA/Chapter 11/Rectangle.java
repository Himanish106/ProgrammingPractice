class Rectangle extends Shape
{

    Rectangle(int l, int b) {
        super(l, b);
    }

    @Override
    public int Area() {
        return super.getLength()*super.getBreadth();
    }

    @Override
    public int Perimeter() {
        return 2*(super.getLength()+super.getBreadth());
    }
}
