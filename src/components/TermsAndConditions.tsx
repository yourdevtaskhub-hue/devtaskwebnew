import React from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions: React.FC = () => {
  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
      <motion.div
        className="max-w-3xl w-full bg-white/90 rounded-3xl shadow-2xl border border-blue-100 p-8 md:p-14 mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Όροι & Προϋποθέσεις Χρήσης
        </motion.h1>
        <motion.p className="text-lg text-gray-700 mb-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Καλώς ήρθατε στο DevTaskHub (https://devtaskhub.com). Η παρούσα ιστοσελίδα δημιουργήθηκε και διαχειρίζεται από την ομάδα DevTaskHub. Η ονομασία "DevTaskHub" αποτελεί εταιρικό brand. Όλο το περιεχόμενο, οι υπηρεσίες και οι πληροφορίες που παρουσιάζονται στον παρόντα ιστότοπο διατίθενται από την ομάδα μας.
        </motion.p>
        <div className="space-y-8 text-gray-800 text-base md:text-lg">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-blue-700 mb-2">Πνευματικά Δικαιώματα</h2>
            <p>
              Όλα τα δικαιώματα πνευματικής ιδιοκτησίας που σχετίζονται με το περιεχόμενο του DevTaskHub (κείμενα, εικόνες, κώδικας, λογότυπα, κ.ά.) ανήκουν στον <b>Θεοχάρη Παναγιώτη Σιώζο</b>, εκτός αν αναφέρεται διαφορετικά. Απαγορεύεται η αναπαραγωγή ή αναδημοσίευση χωρίς προηγούμενη έγγραφη άδεια.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-blue-700 mb-2">Ταυτότητα & Ανάληψη Ευθύνης</h2>
            <p>
              Ο <b>Θεοχάρης Παναγιώτης Σιώζος</b> είναι ο αποκλειστικός δημιουργός, διαχειριστής και υπεύθυνος για το DevTaskHub. Το DevTaskHub δεν αποτελεί εταιρεία ή νομική οντότητα, αλλά προσωπικό brand και portfolio του ιδιοκτήτη. Οποιαδήποτε επικοινωνία, συνεργασία ή χρήση υπηρεσιών γίνεται απευθείας με τον ίδιο τον developer.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-blue-700 mb-2">Περιορισμός Ευθύνης</h2>
            <p>
              Το DevTaskHub παρέχεται “ως έχει” χωρίς καμία εγγύηση για την ακρίβεια, πληρότητα ή καταλληλότητα του περιεχομένου του. Ο ιδιοκτήτης δεν φέρει καμία ευθύνη για τυχόν ζημιές ή απώλειες που μπορεί να προκύψουν από τη χρήση της ιστοσελίδας ή των πληροφοριών της.
              Επιπλέον, ο ιδιοκτήτης δεν φέρει ευθύνη για εσφαλμένες ερμηνείες, παρανοήσεις ή λανθασμένη χρήση των πληροφοριών του site από τους επισκέπτες. Η χρήση του DevTaskHub γίνεται αποκλειστικά με ευθύνη του χρήστη.
            </p>
            <p className="mt-2">
              Το DevTaskHub δεν παρέχει νομικές, φορολογικές ή επαγγελματικές συμβουλές. Η χρήση του site ή η επικοινωνία με τον ιδιοκτήτη δεν δημιουργεί επαγγελματική ή συμβουλευτική σχέση.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-blue-700 mb-2">Συλλογή & Επεξεργασία Δεδομένων</h2>
            <p>
              Η ιστοσελίδα ενδέχεται να συλλέγει τεχνικά δεδομένα (όπως cookies ή IP διευθύνσεις) με σκοπό την ανάλυση επισκεψιμότητας και τη βελτίωση της εμπειρίας χρήσης. Δεν γίνεται εμπορική αξιοποίηση των προσωπικών σας δεδομένων.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-blue-700 mb-2">Τροποποιήσεις</h2>
            <p>
              Ο ιδιοκτήτης διατηρεί το δικαίωμα τροποποίησης των όρων ανά πάσα στιγμή χωρίς προηγούμενη ειδοποίηση. Συνιστάται να επισκέπτεστε τη σελίδα αυτή τακτικά για ενδεχόμενες αλλαγές.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-blue-700 mb-2">Επικοινωνία</h2>
            <p>
              Για οποιοδήποτε νομικό ή τεχνικό θέμα, μπορείτε να επικοινωνήσετε με τον ιδιοκτήτη μέσω email: <a href="mailto:Devtaskhub@gmail.com" className="text-blue-600 underline">Devtaskhub@gmail.com</a>.
            </p>
          </motion.div>
        </div>
        <motion.div className="mt-10 text-center text-gray-700 text-base md:text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <b>Με τη χρήση της παρούσας ιστοσελίδας αποδέχεστε πλήρως τους παραπάνω όρους.</b>
          <div className="mt-2 text-sm text-gray-400">Τελευταία ενημέρωση: Ιούνιος 2024</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TermsAndConditions; 