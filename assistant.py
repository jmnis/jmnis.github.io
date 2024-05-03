import threading
import time
from flask import Flask, request, jsonify
from openai import *
from gtts import gTTS
import os
import playsound

# app = Flask(__name__)

# client = OpenAI(api_key='sk-proj-J0g04abDE9CGEZp8t9rgT3BlbkFJgLdSVsiRjukU3LwftOzu',project='proj_1MyN11OSxRtbK78tZFVqExHG')

# @app.route('/talk', methods=['POST'])
# def talk():
#     user_input = request.json.get('text', '')
#     if not user_input:
#         return jsonify({"error": "No input provided"}), 400

#     try:
#         # Generate a response using OpenAI's GPT model
#         response = client.chat.completions.create(
#             model="gpt-4-turbo",
#             messages=[{"role": "user", "content": user_input}],
#         )
#         text_response = response.choices[0].message.content
        
#         # Convert the response to speech
#         tts = gTTS(text=text_response, lang='en')
#         audio_file = 'response.mp3'
#         tts.save(audio_file)
#         playsound.playsound(audio_file, True)
#         os.remove(audio_file)
    
#         return jsonify({"response": text_response})
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)

client = OpenAI(
        api_key='sk-proj-J0g04abDE9CGEZp8t9rgT3BlbkFJgLdSVsiRjukU3LwftOzu',
        organization='org-NgWOuXlfeeXhiPe1vxUfKfbz',
        project='proj_1MyN11OSxRtbK78tZFVqExHG',
        )

# Print the text in an animated way
def print_text_animated(text):
    for char in text:
        print(char, end='', flush=True)
        # Take rest for a while for realistic typing
        if char in ['.', '!', '?',',']:
            time.sleep(0.15)
        else:
            time.sleep(0.04)
    print("\n")

# Play the audio file
def play_audio(audio_file):
    playsound.playsound(audio_file, True)
    os.remove(audio_file)
 
# Play the audio and print the text at the same time   
def play_and_print(text):
    response = client.audio.speech.create(
        model="tts-1",
        voice="nova",
        input=text,
    )
    response.write_to_file("response.mp3")
    #tts = gTTS(text=text, lang='en')
    audio_file = 'response.mp3'
    #tts.save(audio_file)
    t1 = threading.Thread(target=play_audio, args=(audio_file,))
    t2 = threading.Thread(target=print_text_animated, args=(text,))
    t1.start()
    t2.start()
    t2.join()
    t1.join()

# Talk to the assistant
def talk(user_input):
    # Generate a response using OpenAI's GPT model
    response = client.chat.completions.create(
        model="gpt-4-turbo",
        messages=[{"role": "user", "content": user_input}],
    )
    text_response = response.choices[0].message.content
    # Convert the response to speech
    play_and_print(text_response)

def main():
    play_and_print("Bonjour ! Je suis votre assistant personnel. Comment puis-je vous aider ? Vous pouvez taper 'quitter' pour quitter.")
    while True:
        user_input = input("Moi: ")
        if user_input.lower() == 'quitter':
            play_and_print("Au revoir ! A bientôt.")
            break
        talk(user_input)

if __name__ == '__main__':
    main()