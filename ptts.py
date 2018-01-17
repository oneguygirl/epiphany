import pyttsx3

k = pyttsx3.init()

def say(text):
    k.say(text)
    k.runAndWait()

# say('This is the default speech.')
# rate = k.getProperty('rate')
# volume = k.getProperty('volume')
# voice1 = k.getProperty('voice')

# print rate
# print volume
# print voice1

## Tests different voice rates

# newVoiceRate = 50
# while newVoiceRate <= 300:
#     k.setProperty('rate', newVoiceRate)
#     k.say('Testing different voice rates.')
#     k.runAndWait()
#     newVoiceRate = newVoiceRate + 50
#
# k.setProperty('rate', 125)

## Tests different voice volumes

# newVolume = 0.1
# while newVolume <= 1:
#     k.setProperty('volume', newVolume)
#     k.say('Testing different voice volumes.')
#     k.runAndWait()
#     newVolume = newVolume + 0.3

##-- Checking for voice rate 125--##

k.setProperty('rate', 125)
say('Testing voice rate 125.')


##-- Checking for voice volume 0.5--##

k.setProperty('volume', 0.5)
say('Testing voice volume 0.5.')
)

## Prints and speaks all the voices available ##
voices =k.getProperty('voices')
for voice in voices:
   k.setProperty('voices', voice.id)
   print(voice.id)
   say('Testing voice ')


