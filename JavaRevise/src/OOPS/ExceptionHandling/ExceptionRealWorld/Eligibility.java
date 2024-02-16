package OOPS.ExceptionHandling.ExceptionRealWorld;

public class Eligibility {

    private final StudentProps obj = new StudentProps();

    public void setName(String name) {
        obj.setName(name);
    }

    public String gettingName() {
        return obj.getName();
    }

    public void settingAge(int age) {
        obj.setAge(age);
    }

    public int gettingAge() throws AgeException {
        if (obj.getAge() < 18) {
            throw new AgeException("To apply for this job you must be above 18");
        } else if (obj.getAge() > 30) {
            throw new AgeException("To apply for this job you must be below 30");
        } else {
            return obj.getAge();
        }
    }

    public void settingDegree(String degree) {
        obj.setDegree(degree);
    }

    public String gettingDegree() throws DegreeException {
        if (!("BCA".equals(obj.getDegree()) || "B.C.A.".equals(obj.getDegree()) || "Bachelor of Computer Application".equals(obj.getDegree()))) {
            throw new DegreeException("You must be a graduate in B.C.A. to apply for this job");
        }
        return obj.getDegree();

    }
}
