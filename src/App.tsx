import React from 'react';
import { Box, Container, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { motion } from 'framer-motion';
import { HeroBackground, ProductBackground } from './components/BackgroundSVGs';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#0a0a0a' }}>
      <AnimatedBackground />
      
      {/* Navigation */}
      <AppBar position="fixed" sx={{ 
        background: 'rgba(10, 10, 10, 0.8)', 
        backdropFilter: 'blur(10px)',
        zIndex: 2 
      }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            NEXIUM
          </Typography>
          <Box>
            <Button color="inherit">Solutions</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">About</Button>
            <Button variant="contained" color="primary">Get Started</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <HeroBackground />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #00f2ff, #7000ff)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 4,
                textAlign: 'center',
                position: 'relative',
              }}
            >
              Transform Your Business with Custom Software
            </Typography>
            <Typography variant="h4" sx={{ mb: 6, color: 'text.secondary', textAlign: 'center' }}>
              Innovative solutions for the digital age
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 6,
                  py: 2,
                  background: 'linear-gradient(45deg, #00f2ff, #7000ff)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #00d8e6, #6300e0)',
                  },
                }}
              >
                Schedule a Consultation
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 15, position: 'relative' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 8,
                background: 'linear-gradient(45deg, #00f2ff, #7000ff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Our Expertise
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
                gap: 4,
              }}
            >
              {[
                {
                  title: 'Custom Software',
                  description: 'Tailored solutions designed specifically for your business needs and workflows.'
                },
                {
                  title: 'Cloud Solutions',
                  description: 'Scalable cloud infrastructure and applications for modern enterprises.'
                },
                {
                  title: 'Digital Transformation',
                  description: 'Strategic guidance and implementation to modernize your business processes.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Product Showcase */}
      <Box sx={{ minHeight: '80vh', position: 'relative' }}>
        <ProductBackground />
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Typography variant="h2" sx={{ mb: 4 }}>
                Enterprise Solutions
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, maxWidth: 600 }}>
                From custom ERPs to cloud-native applications, we build software that drives business growth.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.light',
                  },
                }}
              >
                View Case Studies
              </Button>
            </motion.div>
          </Container>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center" color="text.secondary">
            © 2024 NEXIUM. Creating innovative software solutions for a digital world.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default App; 