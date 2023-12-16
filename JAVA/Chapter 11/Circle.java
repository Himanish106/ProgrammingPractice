class Circle extends Shape
{
    Circle(int r)
    {
        super(r);
    }
    @Override
    public int Area() {
        return super.getRadius()*super.getRadius()*(int)Math.PI;
    }

    @Override
    public int Perimeter() {
        return 2*super.getRadius()*(int)Math.PI;
    }
}
