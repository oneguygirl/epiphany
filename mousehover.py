from selenium import webdriver
from selenium.webdriver import ActionChains
chrome_path="/home/merishna/Documents/ubuntu/downloaded files/chromedriver"
chrome = webdriver.Chrome(chrome_path)
chrome.get('https://www.wikipedia.org/')
element_to_hover_over = chrome.find_element_by_('Wikinews')

hover = ActionChains(chrome).move_to_element(element_to_hover_over)
hover.perform()