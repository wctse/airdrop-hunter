import { ethers } from 'ethers';
import fs from 'fs';
import yaml from 'yaml';

// Read settings.yaml
const { rpcEndpoint, privateKeys } = yaml.parse(fs.readFileSync('settings.yaml', 'utf8'));