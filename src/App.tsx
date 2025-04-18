import React from 'react';
import { Box, Container, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';

const heroImage = '/images/hero-bg.jpg'; // You'll need to add this image
const productImage = '/images/product.jpg'; // You'll need to add this image

const App: React.FC = () => {
  return (
    <Box>
      {/* Navigation */}
      <AppBar position="fixed" sx={{ background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(10px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            NEXIUM
          </Typography>
          <Box>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Technology</Button>
            <Button color="inherit">About</Button>
            <Button variant="contained" color="primary">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Parallax bgImage={heroImage} strength={500}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <Container maxWidth="lg">
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
                }}
              >
                The Future is Now
              </Typography>
              <Typography variant="h4" sx={{ mb: 6, color: 'text.secondary' }}>
                Experience innovation like never before
              </Typography>
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
                Discover More
              </Button>
            </motion.div>
          </Container>
        </Box>
      </Parallax>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'background.default', py: 15 }}>
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
              Revolutionary Technology
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
                gap: 4,
              }}
            >
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.2 }}
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
                      Feature {item}
                    </Typography>
                    <Typography color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Product Showcase */}
      <Parallax bgImage={productImage} strength={300}>
        <Box sx={{ minHeight: '80vh', position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: 'rgba(0,0,0,0.5)',
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
                  Experience Excellence
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, maxWidth: 600 }}>
                  Discover our latest innovations that are shaping the future of technology.
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
                  Learn More
                </Button>
              </motion.div>
            </Container>
          </Box>
        </Box>
      </Parallax>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center" color="text.secondary">
            © 2024 NEXIUM. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default App; 