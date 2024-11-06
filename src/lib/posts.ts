// Simple posts data store
export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  publishedAt: string;
}

export const posts: Record<number, Post> = {
  1: {
    id: 1,
    title: "The Future of AI Chatbots in Customer Service",
    description: "Discover how AI is revolutionizing customer service with intelligent chatbots that provide 24/7 support and personalized experiences.",
    content: `Artificial Intelligence is revolutionizing the way businesses handle customer service. Modern AI chatbots are becoming increasingly sophisticated, capable of understanding context, emotion, and complex queries.

    These intelligent systems are not just answering simple questions - they're providing personalized experiences, handling complex transactions, and learning from each interaction to improve their responses.

    The impact on business efficiency and customer satisfaction has been remarkable, with many companies reporting significant improvements in response times and resolution rates.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    publishedAt: "2024-03-10T10:00:00Z"
  },
  2: {
    id: 2,
    title: "Implementing ChatGPT in Your Business",
    description: "Learn how to leverage ChatGPT technology to enhance your business operations and improve customer engagement.",
    content: `ChatGPT has emerged as a powerful tool for businesses looking to enhance their operations and customer engagement. This advanced language model can be integrated into various aspects of your business.

    From customer support to content generation, ChatGPT's capabilities can streamline processes and provide valuable insights. The key is understanding how to effectively implement and customize the technology for your specific needs.

    We'll explore practical implementation strategies and best practices for maximizing the benefits of ChatGPT in your business environment.`,
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a",
    publishedAt: "2024-03-08T10:00:00Z"
  },
  3: {
    id: 3,
    title: "Best Practices for Conversational AI",
    description: "Expert tips on creating engaging and effective conversational AI experiences that delight users.",
    content: `Creating effective conversational AI experiences requires a deep understanding of both technical capabilities and human psychology. The key is to design interactions that feel natural and helpful.

    Best practices include maintaining context throughout conversations, handling edge cases gracefully, and providing clear paths for users to reach human support when needed.

    We'll dive into specific techniques and strategies that have proven successful in real-world applications.`,
    image: "https://images.unsplash.com/photo-1675557009875-915f90033db9",
    publishedAt: "2024-03-06T10:00:00Z"
  }
};