import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import csitan4 from '@/assets/csitan4.jpg';
import csitan5 from '@/assets/csitan5.jpg';
import csitan6 from '@/assets/csitan6.jpg';
import csitan7 from '@/assets/csitan7.jpg';
import csitan8 from '@/assets/csitan8.jpg';
import csitan9 from '@/assets/csitan9.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import copyImg from '@/assets/copy.jpg';
import backgroundImg from '@/assets/background.jpg';
import csitan1 from '@/assets/csitan1.jpg';
import csitan2 from '@/assets/csitan2.jpg';
import csitan3 from '@/assets/csitan3.jpg';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from 'lucide-react';
import csitanLogo from '@/assets/csitan-logo.png'; // or use any avatar image you want
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_3srz8sq';
    const templateID = 'template_omx6xke';
    const userID = '0aKXUicBRjnhqUyof';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      details: 'rupandehicsitan@gmail.com',
      description: 'Email us anytime, we look forward to your message!',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+977-9849121059',
      description: 'Call us anytime, we are happy to assist you!',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Butwal, Rupandehi, Nepal',
      description: 'Find us in the heart of Butwal, Rupandehi district.',
    },
    {
      icon: Clock,
      title: 'Availability',
      details: 'Anytime',
      description: 'Feel free to reach out to us whenever you need. We are always here to help!',
    },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/csitanrupandehi', icon: FaFacebook },
    { name: 'Instagram', href: 'https://www.instagram.com/csitanrupandehi/', icon: FaInstagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/csitanrupandehi/', icon: FaLinkedin },
  ];

  const faqs = [
    {
      question: 'How can I become a member of CSITAN Rupandehi?',
      answer: 'Students enrolled in CSIT programs at our partner colleges can join by filling out the membership form and attending our orientation sessions.',
    },
    {
      question: 'Are the events free for members?',
      answer: 'Most of our regular events are free for members. Some specialized workshops or competitions may have a nominal fee to cover materials and refreshments.',
    },
    {
      question: 'How can I stay updated about upcoming events?',
      answer: 'Follow our social media pages, join our WhatsApp groups, or check our website regularly for the latest updates on events and activities.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="get-in-touch"
        className="py-20 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Transparent dark overlay */}
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.55, zIndex: 1 }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for any questions, suggestions, or collaboration opportunities. We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              Get In <span className="text-[#CF4546]">Touch</span>
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 rounded-3xl">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-foreground mb-2">{item.details}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section
        className="py-20 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Transparent dark overlay */}
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.55, zIndex: 1 }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Card className="rounded-3xl">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-primary mr-3" />
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-secondary text-primary-foreground"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="h-4 w-4 mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >

              {/* Social Media */}
              <div className="relative">
                <span
                  className="absolute left-1/2 -translate-x-1/2 -top-6 sm:-top-7 bg-[#CF4546] px-4 py-1.5 sm:px-8 sm:py-2 text-white font-bold rounded-full border-2 border-white shadow-lg z-10 text-base sm:text-lg uppercase tracking-wide text-center max-w-[90vw] sm:max-w-xs truncate"
                  style={{ width: 'fit-content' }}
                >
                  Get Connected
                </span>
                <Card className="rounded-3xl border-2 border-primary pt-6">
                  <CardHeader>
                    <p className="text-muted-foreground">Stay connected on social media for updates and community discussions.</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col xs:flex-row sm:flex-row justify-center items-center gap-3 sm:gap-0 py-2">
                      {socialLinks.map((social, idx) => {
                        const Icon = social.icon;
                        return (
                          <>
                            <motion.a
                              key={social.name}
                              href={social.href}
                              whileHover={{ scale: 1.18, y: -4 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all group border border-gray-200 mx-1"
                              style={{ boxShadow: '0 2px 8px 0 rgba(30, 64, 175, 0.10)' }}
                            >
                              <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-[#CF4546] group-hover:text-[#1FADE4] transition-colors duration-200" />
                            </motion.a>
                            {idx < socialLinks.length - 1 && (
                              <div className="hidden sm:block h-10 w-px bg-gray-300 mx-1" />
                            )}
                          </>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-20 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${copyImg})`, backgroundPosition: 'left center' }}
      >
        {/* Extra dark overlay for FAQ section */}
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.7, zIndex: 1 }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Find answers to common questions about CSITAN Rupandehi.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-3xl ml-24">
                  <CardContent className="pt-6 ml-2">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start ml-1">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex items-start ml-1">
                      <span className="mr-2 mt-1 text-primary">➔</span>
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;