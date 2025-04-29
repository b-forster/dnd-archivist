import { memo } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Box, Link } from '@mui/material';

const Footer = memo(() => {
    return (
        <Box>
            <Link
                href="https://github.com/b-forster/dnd-archivist"
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                color="#ccc"
                underline='none'
                marginTop={2}
                marginBottom={2}
                fontSize='0.9rem'

            >
                <FaGithub size={24} style={{ marginRight: '8px' }} />
                View on GitHub
            </Link>
        </Box>
    )
});

export default Footer;
