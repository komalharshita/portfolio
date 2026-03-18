import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Facebook, Instagram, MessageCircle } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/komalharshita", href: "https://www.linkedin.com/in/komalharshita/" },
  { icon: Github, label: "GitHub", value: "github.com/komalharshita", href: "https://github.com/komalharshita" },
  { icon: Mail, label: "Gmail", value: "komal.sony234@gmail.com", href: "mailto:komal.sony234@gmail.com" },
  { icon: Facebook, label: "Facebook", value: "komalxharshitaa", href: "https://www.facebook.com/komalxharshitaa/" },
  { icon: Instagram, label: "Instagram", value: "@kokokomali", href: "https://instagram.com/kokokomali" },
  { icon: MessageCircle, label: "Discord", value: "prideandprejudice", href: "https://discord.com/users/prideandprejudice" },
];

const Contact = () => (
  <PageLayout title="Let's Connect!" subtitle="Interested in data, storytelling, or collaboration? I'd love to hear from you.">
    <div className="max-w-2xl space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="stat-card bg-gradient-to-r from-primary/5 to-accent/5"
      >
        <h3 className="font-heading font-semibold text-foreground mb-1">Open to Opportunities</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Currently seeking internships in Data Analytics and Business Intelligence. Also open to creative collaborations and writing projects!
        </p>
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-2">
        {socials.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="stat-card flex items-center gap-4 no-underline"
          >
            <c.icon className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="font-heading font-semibold text-sm text-foreground">{c.label}</p>
              <p className="text-xs text-muted-foreground">{c.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Contact;
