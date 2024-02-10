package Week2;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class LinkShortner {

    private Map<String, String> shortToLongMap = new HashMap<>();
    private Map<String, String> longToShortMap = new HashMap<>();
    private int counter = 0;

    private String generateShortUrl(String longUrl) {
        return String.valueOf(longUrl.hashCode() + counter++);
    }

    public String shortenUrl(String longUrl) {
        if (longUrl == null || longUrl.isEmpty()) {
            throw new IllegalArgumentException("Invalid long URL");
        }

        if (longToShortMap.containsKey(longUrl)) {
            return longToShortMap.get(longUrl);
        }

        String shortUrl = generateShortUrl(longUrl);
        shortToLongMap.put(shortUrl, longUrl);
        longToShortMap.put(longUrl, shortUrl);

        return shortUrl;
    }

    public String expandUrl(String shortUrl) {
        if (shortUrl == null || shortUrl.isEmpty()) {
            throw new IllegalArgumentException("Invalid short URL");
        }

        return shortToLongMap.getOrDefault(shortUrl, "Short URL not found");
    }

    public static void main(String[] args) {
        LinkShortner linkShortener = new LinkShortner();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Shorten URL");
            System.out.println("2. Expand URL");
            System.out.println("3. Exit");
            System.out.print("Choose an option: ");

            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    try {
                        System.out.print("Enter the long URL: ");
                        String longUrl = scanner.nextLine();
                        String shortUrl = linkShortener.shortenUrl(longUrl);
                        System.out.println("Shortened URL: " + shortUrl);
                    } catch (IllegalArgumentException e) {
                        System.out.println("Error: " + e.getMessage());
                    }
                    break;

                case 2:
                    try {
                        System.out.print("Enter the short URL: ");
                        String shortUrlToExpand = scanner.nextLine();
                        String expandedUrl = linkShortener.expandUrl(shortUrlToExpand);
                        System.out.println("Expanded URL: " + expandedUrl);
                    } catch (IllegalArgumentException e) {
                        System.out.println("Error: " + e.getMessage());
                    }
                    break;

                case 3:
                    System.out.println("Exiting...");
                    System.exit(0);

                default:
                    System.out.println("Invalid choice. Please enter a valid option.");
            }
        }
    }
}
