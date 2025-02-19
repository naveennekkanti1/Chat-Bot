# HealthChatbot
## End-to-end-Medical-Chatbot-using-Llama2

## How to run?

### STEPS:

Clone the repository

```bash
Project repo: https://github.com/naveennekkanti1/Chat-Bot.git
```

### STEP 01- Create a conda environment after opening the repository

```bash
conda create -n mchatbot python=3.8 -y
```

```bash
conda activate mchatbot
```

### STEP 02- install the requirements

```bash
pip install -r requirements.txt
```

### Create a `.env` file in the root directory and add your Pinecone credentials as follows:

```ini
PINECONE_API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
PINECONE_API_ENV = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Download the quantize model from the link provided in model folder & keep the model in the model directory:

```ini
## Download the Llama 2 Model:

llama-2-7b-chat.ggmlv3.q4_0.bin


## From the following link:
https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGML/tree/main
```

```bash
# run the following command
python store_index.py
```

```bash
# Finally run the following command
python app.py
```

```bash
# go to Chatbot folder then backend
npm run dev
```

```bash
# go to Chatbot folder then fronend
npm run dev
```

Now,

```bash
open up localhost:8080 and 5000
```

### Techstack Used:
###### FrontEnd
- React JS
- TypeScript
###### BackEnd
- Python
- LangChain
- Flask
- Meta Llama2
###### DataBases
- Pinecone (Trained and Test Chat)
- MongoDB (for user credentials)

# HealthChatbot

- Led the development of a Chatbot for health-related issues using React,Node,Python and Meta Llama2, with Reinforcement learning as a key component and Llama 2 Flask for integrating.
- Achieved 0.97 accuracy in testing, with 84% performance during project evaluations
