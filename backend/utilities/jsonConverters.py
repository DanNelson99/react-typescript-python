# Not my code something I pulled of the internet for now.
# I have to build something recursive to handle complex data structures.
import re

camel_pat = re.compile(r'([A-Z])')
under_pat = re.compile(r'_([a-z])')

def camel_to_underscore(name):
    return camel_pat.sub(lambda x: '_' + x.group(1).lower(), name)

def underscore_to_camel(name):
    return under_pat.sub(lambda x: x.group(1).upper(), name)

def convert_json(d, convert):
    if isinstance(d, list):
        return [convert_json(item, convert) for item in d]
    new_d = {}
    for k, v in d.items():
        new_d[convert(k)] = convert_json(v,convert) if isinstance(v,dict) else v
    return new_d